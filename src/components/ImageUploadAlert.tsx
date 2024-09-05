interface alertTypes {
  show: boolean;
  uploadMessage: string;
  handleToggle: () => void;
}

const ImageUploadAlert = ({
  show,
  uploadMessage,
  handleToggle,
}: alertTypes) => {
  return (
    <div className={`fixed inset-0 ${!show && "hidden"}`}>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-neutral-900 text-white p-5 rounded-lg w-96">
          <h1 className="text-2xl font-bold text-center">Image Upload</h1>
          <p className="text-center text-lg mt-3">{uploadMessage}</p>
          <button
            className="bg-blue-500 text-white w-full py-2 mt-5 rounded-lg"
            onClick={handleToggle}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadAlert;
