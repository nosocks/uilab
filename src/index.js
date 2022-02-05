#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
// import { fileURLToPath } from 'url'
const { green, red, bold } = require('colorette')

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const templates = fs.readdirSync(path.join(__dirname, 'templates'))
const questions = [
  {
    name: 'template',
    type: 'list',
    message: 'Select a template:',
    choices: templates,
  },
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
  },
]

const createDirectoryContent = (cwd, templatePath, projectName) => {
  const skip = ['node_modules', 'pnpm-lock.yaml']
  const filesToCreate = fs.readdirSync(templatePath)
  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file)
    const stats = fs.statSync(origFilePath)

    if (skip.indexOf(file) > -1) return

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8')
      const writePath = path.join(cwd, projectName, file)
      fs.writeFileSync(writePath, contents, 'utf8')
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(cwd, projectName, file))
      // copy files/folder inside current folder recursively
      createDirectoryContent(
        path.join(templatePath, file),
        path.join(projectName, file)
      )
    }
  })
}

inquirer.prompt(questions).then(({ template, name }) => {
  const cwd = process.cwd()
  const templatePath = path.join(__dirname, 'templates', template)
  const targetPath = path.join(cwd, name)
  if (fs.existsSync(targetPath)) {
    console.log(bold(red(`Folder ${targetPath} already exists.`)))
    return
  }
  fs.mkdirSync(targetPath)
  createDirectoryContent(cwd, templatePath, name)
  console.log(
    bold(
      green(`Done! now cd into ${name} and install the project dependencies.`)
    )
  )
})
