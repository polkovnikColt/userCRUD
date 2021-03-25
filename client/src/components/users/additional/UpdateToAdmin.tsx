import React, {useState} from 'react';
import {UserInterface} from "../../../types/types";
import {useDispatch} from "react-redux";
import {updateToAdmin} from "../../../store/user/userActions";
import {Selector} from "../../reusable/Selector";
import {Button} from "antd";
import {getUsersEmails} from "./service";

type UpdateToAdminProps = {
    users: UserInterface[]
}

export const UpdateToAdmin: React.FC<UpdateToAdminProps> = ({users}) => {

    const dispatch = useDispatch();
    const [id, setId] = useState(0);

    const handleChange = (name: string, value: string): void => {
        const credential: UserInterface = users.filter((user: UserInterface) => user.email === value)[0];
        setId(+credential.id);
    }

    const handleSubmit = (): void => {
        dispatch(updateToAdmin(id));
    }

    return (
      <>
          <Selector
              message={'User to update'}
              name={'update'}
              values={getUsersEmails(users)}
              changeHandler={handleChange}/>
          <div className="w-100">
              <Button
                  className="mx-auto"
                  onClick={handleSubmit}
                  type="primary">
                  Update profile
              </Button>
          </div>
      </>
    )
}