import { useAppDispatch, useAppSelector } from '@/hooks/store';
import SuccessIcon from '@/assets/images/icons/alerts-success.svg';
import ErrorIcon from '@/assets/images/icons/alerts-error.svg';
import { removeAlert } from '@/store/slicers/alertsSlice';

function Alerts() {
  const { alerts } = useAppSelector((state) => state.alerts);
  const dispatch = useAppDispatch();

  const deleteAlert = (id: number) => {
    dispatch(removeAlert(id));
  };

  return (
    <div className="alerts">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="alerts__item"
        >
          <div className={`alerts__body ${alert.type === 'success' ? 'success' : alert.type === 'error' ? 'error' : 'info'}`}>{alert.text}</div>
          <button
            type="button"
            className="alerts__icon"
            onClick={() => deleteAlert(alert.id)}
          >
            {alert.type === 'success' ? <SuccessIcon /> : <ErrorIcon />}
          </button>
        </div>
      ))}
    </div>
  );
}
export default Alerts;
