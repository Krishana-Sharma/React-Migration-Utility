

import * as React from 'react';
import { Heading, ListItem, OrderedList, Section, UnorderedList } from '@carbon/react'

const ReactMigrationWithCarbon: React.FC = () => {
  return (
    <div className="app-container">
      <Heading className="heading">React Migration with IBM Carbon Design System & Codemod</Heading>
      <hr className="divider" />
      <Section as="Tools">
        <Heading className="heading">Tools & Technologies</Heading>
        <div className="list">
            <UnorderedList>
                <ListItem>React</ListItem>
                <ListItem>Typescript</ListItem>
                <ListItem>IBM Carbon</ListItem>
                <ListItem>IBM Plex</ListItem>
            </UnorderedList>
        </div>
        <Heading className="heading">Steps to uprgrade react from older version to latest</Heading>
        <OrderedList>
            <ListItem>npx npm-check-updates -u</ListItem>
            <ListItem>npm install --legacy-peer-deps</ListItem>
            <ListItem>npm install react@latest react-dom@latest --legacy-peer-dep</ListItem>
            <ListItem>Run update-react codemod script</ListItem>
        </OrderedList>
      </Section>
    </div>
  );
}


export default ReactMigrationWithCarbon;
