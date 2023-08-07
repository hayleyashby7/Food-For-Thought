interface ErrorMessageProps {
	message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	return (
		<p role='alert' className='text-red-900'>
			{message}
		</p>
	);
};

export default ErrorMessage;
