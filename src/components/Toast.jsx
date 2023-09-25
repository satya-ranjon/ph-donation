import PropTypes from "prop-types";

const Toast = ({ isOpen, status = "success", message }) => {
  return (
    isOpen && (
      <div className="fixed top-10 right-10 z-50">
        <div
          className="
      flex
      w-full
      max-w-sm
      mx-auto
      overflow-hidden
      bg-white
      rounded-lg
      shadow-md
    ">
          <div
            className={`flex items-center justify-center w-12 ${
              status === "success" && "bg-green-500"
            } ${status === "error" && "bg-red-500"}`}>
            {status === "success" && (
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            )}
            {status === "error" && (
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            )}
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span
                className={`font-semibold ${
                  status === "success" && "text-green-500"
                }  ${status === "error" && "text-red-500"} `}>
                {status === "success" && "Success"}
                {status === "error" && "Error"}
              </span>
              <p className="text-sm text-gray-600 ">
                {message || "Message Here"}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

Toast.propTypes = {
  status: PropTypes.oneOf(["success", "error"]),
  message: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Toast;
