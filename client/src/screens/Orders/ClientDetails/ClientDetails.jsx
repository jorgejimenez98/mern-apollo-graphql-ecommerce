import React from "react";
import * as mui from "@mui/material";

const ItemText = ({ label, text }) => {
  return (
    <React.Fragment>
      <mui.ListItem dense button>
        {label === "Emails" ? (
          <div>
            <div>
              <strong>{label}:&nbsp;</strong>
            </div>
            {text.map((item, idx) => (
              <div key={idx}>
                <span>{item.email}</span>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <strong>{label}:&nbsp;</strong>
            <span>{text}</span>
          </div>
        )}
      </mui.ListItem>
      <mui.Divider />
    </React.Fragment>
  );
};

function ClientDetails({ client }) {
  return (
    <mui.Card>
      <mui.CardHeader title="Clients Details" />
      <mui.CardContent>
        <mui.List>
          {/* Name */}
          <ItemText label="Name" text={client.name} />
          <ItemText label="Last Name" text={client.lastname} />
          <ItemText label="Company" text={client.company} />
          <ItemText label="Age" text={client.age} />
          <ItemText label="Type" text={client.type} />
          <ItemText label="Emails" text={client.emails} />
        </mui.List>
      </mui.CardContent>
    </mui.Card>
  );
}

export default ClientDetails;
