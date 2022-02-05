const Button = ({ text = 'btn', disabled = false }) => (
  <button
    type="button"
    className={`
      inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      ${
        disabled
          ? 'cursor-not-allowed bg-gray-500'
          : 'bg-indigo-600 hover:bg-indigo-700'
      }
    `}
  >
    {text}
  </button>
)

export default Button
