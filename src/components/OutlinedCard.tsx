import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cn from 'classnames';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CardContainer = ({
  title,
  label,
  isFlipped,
  isBack = false,
  children,
}: {
  title?: React.ReactNode;
  label?: React.ReactNode;
  isFlipped?: boolean;
  isBack?: boolean;
  children: React.ReactNode;
}) => (
  <CardContent
    className={cn({
      'is-flipped': isFlipped,
      'is-back': isBack,
    })}
    sx={{
      position: 'absolute',
      height: '100%',
      width: '100%',
      borderRadius: '5px',
      backfaceVisibility: 'hidden',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transition: 'transform 0s',
      zIndex: 2,
      bgcolor: 'common.light',
      '&.is-back': {
        transform: 'rotateY(-180deg)',
      },
      '&.is-flipped': {
        transition: 'transform 1s',
        transform: 'rotateY(180deg)',
      },
      '&.is-back.is-flipped': {
        transform: 'rotateY(0deg)',
      },
    }}
  >
    {title && (
      <Typography
        variant="h4"
        component="div"
        textAlign="center"
        m="0 0 10px 0"
      >
        {title}
      </Typography>
    )}
    {label && (
      <Typography variant="h5" component="div" textAlign="center">
        {label}
      </Typography>
    )}
    <CardActions
      sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        left: 0,
        justifyContent: 'flex-end',
      }}
    >
      {children}
    </CardActions>
  </CardContent>
);

type Props = {
  goNext(): void;
  data: [string, string, string, string];
};

export default function OutlinedCard({ goNext, data }: Props) {
  const [isFlipped, setFlip] = React.useState(false);

  React.useEffect(() => {
    setFlip(false);
  }, [setFlip, data]);

  const back = (
    <>
      {data.slice(0, 3).map((item) => (
        <>
          {item}
          <br />
        </>
      ))}
    </>
  );
  const front = data.slice(-1).join(', ');

  return (
    <Box
      sx={{
        width: 320,
        height: 320,
        perspective: '1000px',
      }}
    >
      <Card
        className={cn({
          'is-flipped': isFlipped,
        })}
        variant="outlined"
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          overflow: 'visible',
          bgcolor: 'transparent',
          border: 0,
          // '&.is-flipped': {
          //   transition: 'transform 1s',
          //   transform: 'rotateY(180deg)',
          // },
        }}
      >
        <CardContainer title={front} isFlipped={isFlipped}>
          <Button size="small" onClick={() => setFlip(!isFlipped)}>
            Flip!
          </Button>
        </CardContainer>

        <CardContainer label={back} title={front} isBack isFlipped={isFlipped}>
          <Button size="small" onClick={goNext}>
            Next!
          </Button>
        </CardContainer>
      </Card>
    </Box>
  );
}
