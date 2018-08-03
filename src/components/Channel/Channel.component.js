import React from 'react';
import PropTypes from 'prop-types';
import { ChannelSelect } from './ChannelSelect.component';
import { Toggles } from '../Toggles';
import { Box } from '../design-system';

export const ChannelComponent = ({ channel, onSelectSample, onSetGain }) => (
  <Box mb={3} display="flex">
    <ChannelSelect onChange={onSelectSample} onSetGain={onSetGain} channel={channel} />
    <Toggles notes={channel.notes} channelID={channel.id} />
  </Box>
);

ChannelComponent.propTypes = {
  channel: PropTypes.shape({
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onSelectSample: PropTypes.func.isRequired,
  onSetGain: PropTypes.func.isRequired,
};
