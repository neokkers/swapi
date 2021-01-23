import React from "react";
import styled from "styled-components/macro";
import { List, ListItem } from "@material-ui/core";

export const ItemList = styled(({ className, children, button }) => {
  return (
    <div className={className}>
      <List component="nav">
        {React.Children.map(children, (el, idx) => (
          <ListItem button={button} key={idx}>
            {el}
          </ListItem>
        ))}
      </List>
    </div>
  );
})``;
