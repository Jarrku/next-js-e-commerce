import tw from "twin.macro";

interface Props {
  cartOpen: boolean;
  handleOpen: () => void;
}
function Cart({ cartOpen, handleOpen }: Props) {
  return (
    <div
      css={[
        tw`fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300`,
        cartOpen ? tw`translate-x-0 ease-out` : tw`translate-x-full ease-in`,
      ]}
    >
      <div tw="flex items-center justify-between">
        <h3 tw="text-2xl font-medium text-gray-700">Your cart</h3>
        <button onClick={handleOpen} tw="text-gray-600 focus:outline-none">
          <svg
            tw="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <hr tw="my-3" />
      {[0, 1, 2].map((item) => (
        <div key={item} tw="flex justify-between mt-6">
          <div tw="flex">
            <img
              tw="h-20 w-20 object-cover rounded"
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
              alt=""
            />
            <div tw="mx-3">
              <h3 tw="text-sm text-gray-600">Mac Book Pro</h3>
              <div tw="flex items-center mt-2">
                <button tw="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    tw="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <span tw="text-gray-700 mx-2">2</span>
                <button tw="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg
                    tw="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <span tw="text-gray-600">20$</span>
        </div>
      ))}

      <div tw="mt-8">
        <form tw="flex items-center justify-center">
          <input tw="form-input w-48" type="text" placeholder="Add promocode" />
          <button tw="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Apply</span>
          </button>
        </form>
      </div>
      <a tw="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
        <span>Chechout</span>
        <svg
          tw="h-5 w-5 mx-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}

export default Cart;
