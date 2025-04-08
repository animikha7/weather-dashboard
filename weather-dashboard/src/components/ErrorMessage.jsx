export default function ErrorMessage({ message }) {
    return (
        <div className="text-red-600 dark:text-red-400 text-center font-medium mt-4">
        ⚠️ {message}
      </div>
    );
  }
  