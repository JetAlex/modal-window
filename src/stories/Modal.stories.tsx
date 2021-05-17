import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Modal, IModal } from '../components/modal';

export default {
  title: 'Example/Modal',
  component: Modal,
} as Meta;

const Template: Story<IModal> = (args) => <Modal {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  modalTitle: "Edit Comparison",
  onClose: () => alert("OnClose"),
  children: <p>Children Components</p>,
  modalFooterButton: {
    title: "Compare",
    callback: () => alert("Compare"),
  }
};
