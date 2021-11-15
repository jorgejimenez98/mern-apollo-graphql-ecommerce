import React from "react";
import { FieldArray, getIn } from "formik";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import { Add } from "@mui/icons-material";
import EmailFormControl from "./EmailFormControl";

function EmailsFormControl({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}) {
  return (
    <FieldArray name="emails">
      {({ push, remove }) => (
        <div>
          <div className="text-center">
            <Tooltip
              title={`Add New Email`}
              placement="bottom"
              aria-label="add"
              TransitionComponent={Zoom}
            >
              <IconButton onClick={() => push({ email: "" })}>
                <Add />
              </IconButton>
            </Tooltip>
          </div>

          {values.emails.map((p, index) => {
            const email = `emails[${index}].email`;
            const touchedEmail = getIn(touched, email);
            const errorEmail = getIn(errors, email);

            return (
              <div key={index}>
                <EmailFormControl
                  name={email}
                  values={p.email}
                  handleChange={handleChange}
                  touched={touchedEmail}
                  errors={errorEmail}
                  handleBlur={handleBlur}
                  remove={remove}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      )}
    </FieldArray>
  );
}

export default EmailsFormControl;
