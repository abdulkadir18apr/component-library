import Sidebar from "../../components/Sidebar";
import { ComponentView } from "../../components/ConponentView";
import Alert from "../../Library/Alerts/Alerts";
import "./alert.css";
export default function Alerts() {
  return (
    <div className="alert">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="alerts">
        <ComponentView
          heading={"Alerts"}
          Component={AlertComponentView}
          code={alertCode}
        />
      </div>
    </div>
  );
}
export const AlertComponentView = () => {
  return (
    <div>
      <Alert type="success">This is a success alert</Alert>
      <Alert type="info" size="small">
        This is a small info alert
      </Alert>
      <Alert type="warning" size="large">
        This is a large warning alert
      </Alert>
      <Alert type="danger">This is a danger alert</Alert>
    </div>
  );
};

const alertCode = `<Alert type="success">This is a success alert</Alert>
<Alert type="info" size="small">
  This is a small info alert
</Alert>
<Alert type="warning" size="large">
  This is a large warning alert
</Alert>
<Alert type="danger">This is a danger alert</Alert>`;
