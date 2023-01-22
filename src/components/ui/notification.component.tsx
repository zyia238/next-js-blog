import classes from './notification.module.css';

export type NotificationStatus = 'success' | 'error' | 'pending';

export interface NotificationProps {
	title: string;
	message: string;
	status: NotificationStatus;
}

export const Notification: React.FC<NotificationProps> = ({ title, message, status }) => {
	let statusClasses = '';

	if (status === 'success') {
		statusClasses = classes.success;
	}

	if (status === 'error') {
		statusClasses = classes.error;
	}

	const cssClasses = `${classes.notification} ${statusClasses}`;

	return (
		<div className={cssClasses}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
};

export default Notification;