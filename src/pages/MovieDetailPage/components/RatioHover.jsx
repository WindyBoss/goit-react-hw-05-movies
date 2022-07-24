import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export const RatioHover = ({ ratio, showRatio, anchorEl }) => {
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: 'none',
        position: 'absolute',
        top: 20,
        left: 120,
      }}
      open={showRatio}
      disableRestoreFocus
      anchorEl={anchorEl}
    >
      <Typography sx={{ padding: '5px' }}>{ratio}/10</Typography>
    </Popover>
  );
};

RatioHover.propTypes = {
  ratio: PropTypes.number.isRequired,
  showRatio: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
};
