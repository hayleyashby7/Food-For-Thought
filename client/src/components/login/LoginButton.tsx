interface LogoutButtonProps {
	onClick: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onClick }) => {
	return <button onClick={onClick}>Logout</button>;
};

export default LogoutButton;
