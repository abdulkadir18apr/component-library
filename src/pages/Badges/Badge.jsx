import Sidebar from "../../components/Sidebar";
import { ComponentView } from "../../components/ConponentView";
import "./badge.css";
import Badge from "../../Library/Badges/Badges";
export default function Badges() {
  return (
    <div className="badge">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="badges">
        <ComponentView
          heading={"Badges"}
          Component={BadgeComponentView}
          code={BadgeCode}
        />
      </div>
    </div>
  );
}
export const BadgeComponentView = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Badge type="primary">Primary Badge</Badge>
      <Badge type="secondary">Secondary Badge</Badge>
      <Badge type="success">Success Badge</Badge>
      <Badge type="danger">Danger Badge</Badge>
    </div>
  );
};

const BadgeCode = `<Badge type="primary">Primary Badge</Badge>
<Badge type="secondary">Secondary Badge</Badge>
<Badge type="success">Success Badge</Badge>
<Badge type="danger">Danger Badge</Badge>`;
