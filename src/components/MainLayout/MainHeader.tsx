import { Suspense, useState, useEffect } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Box,
  IconButton,
  Divider,
  Grid,
} from '@material-ui/core';

import {
  ReceiveInfo,
  MyAvatarMenu,
  MenuNavigationLinks,
  CirclesHeaderSection,
  WalletButton,
} from 'components';
import { CirclesSelectorSection } from 'components/MyAvatarMenu/MyAvatarMenu';
import { HamburgerIcon, CloseIcon } from 'icons';
import {
  useMyProfileLoadable,
  useSelectedCircle,
  useWalletAuth,
} from 'recoilState/app';
import { getMainNavigation, checkActive } from 'routes/paths';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.custom.appHeaderHeight,
    display: 'grid',
    alignItems: 'center',
    background: theme.colors.primary,
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(0, '25px'),
      height: theme.custom.appHeaderHeight - 11,
    },
    '& > *': {
      alignSelf: 'center',
    },
    '& .MuiSkeleton-root': {
      marginLeft: theme.spacing(1.5),
    },
    '& .MuiSkeleton-rect': {
      borderRadius: 5,
    },
  },
  mobileContainer: {
    height: '100vh',
    position: 'relative',
    backgroundColor: theme.colors.ultraLightGray,
  },
  mobileMenu: {
    position: 'absolute',
    backgroundColor: theme.colors.ultraLightGray,
    height: '85%',
    width: '100%',
    overflow: 'scroll',
    overscrollBehaviorY: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    zIndex: 2,
  },
  coordinapeLogo: {
    justifySelf: 'start',
    height: 40,
  },
  smallNavAndButtons: {
    justifySelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifySelf: 'end',
    },
  },
  navLinks: {
    justifySelf: 'stretch',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  },
  buttons: {
    justifySelf: 'end',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navLink: {
    margin: theme.spacing(0, 2),
    fontSize: 20,
    fontWeight: 700,
    color: theme.colors.white,
    textDecoration: 'none',
    padding: '6px 0',
    position: 'relative',
    '&::after': {
      content: `" "`,
      position: 'absolute',
      left: '50%',
      right: '50%',
      backgroundColor: theme.colors.mediumRed,
      transition: 'all 0.3s',
      bottom: 0,
      height: 2,
    },
    '&:hover': {
      '&::after': {
        left: 0,
        right: 0,
        backgroundColor: theme.colors.mediumRed,
      },
    },
    '&.active': {
      '&::after': {
        left: 0,
        right: 0,
        backgroundColor: theme.colors.red,
      },
      '&:hover': {
        '&::after': {
          left: 0,
          right: 0,
          backgroundColor: theme.colors.red,
        },
      },
    },
    [theme.breakpoints.down('sm')]: {
      position: 'unset',
      color: theme.colors.text,
      fontWeight: 'normal',
      '&:hover': {
        color: theme.colors.black,
        '&::after': {
          content: 'none',
        },
      },
      '&.active': {
        color: theme.colors.red,
        '&::after': {
          content: 'none',
        },
      },
    },
  },
  editCircleButton: {
    backgroundColor: theme.colors.red,
    borderRadius: '8px',
    width: '32px',
    height: '32px',
  },
  accountInfoMobile: {
    '& .MuiButtonBase-root': {
      background: theme.colors.white,
    },
  },
  editIcon: {
    color: theme.colors.white,
  },
  profileHeading: {
    color: theme.colors.red,
  },
}));

export const MainHeader = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { address } = useWalletAuth();
  const myProfile = useMyProfileLoadable();
  const valueProfile = myProfile.valueMaybe();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    !address && setIsMobileMenuOpen(false);
  }, [address]);

  const screenDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  const menuWalletButton = !address ? (
    <WalletButton />
  ) : (
    <IconButton
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      size="small"
      aria-label="menu"
    >
      {!isMobileMenuOpen ? <HamburgerIcon /> : <CloseIcon />}
    </IconButton>
  );

  return !screenDownSm ? (
    <div className={classes.root}>
      <img
        alt="logo"
        className={classes.coordinapeLogo}
        src="/svgs/logo/logo.svg"
      />
      <Suspense fallback={<span />}>
        <HeaderNav />
      </Suspense>
      <div className={classes.buttons}>
        <Suspense fallback={<span />}>
          <ReceiveInfo />
        </Suspense>
        <WalletButton />
        <Suspense fallback={<span />}>
          <MyAvatarMenu />
        </Suspense>
      </div>
    </div>
  ) : (
    <div>
      <div className={classes.root}>
        <img
          alt="logo"
          className={classes.coordinapeLogo}
          src="/svgs/logo/logo.svg"
        />
        {menuWalletButton}
      </div>
      {isMobileMenuOpen && (
        <div className={classes.mobileContainer}>
          <Box
            display="flex"
            className={classes.mobileMenu}
            flexDirection="column"
            pt={3}
            px={1}
            pb={6}
          >
            <Box pb={2}>
              <Suspense fallback={<span />}>
                <HeaderNav />
              </Suspense>
            </Box>
            <Divider variant="fullWidth" />
            <Box pt={3} />
            <Grid container spacing={2} alignItems="center">
              <Suspense fallback={null}>
                <Grid item>
                  <MyAvatarMenu />
                </Grid>
              </Suspense>
              <Grid className={classes.accountInfoMobile} item>
                <WalletButton />
                {/* TODO: ask Alexander where the GIVES needs to be 
              <Suspense fallback={<span />}>
                <ReceiveInfo />
              </Suspense> */}
              </Grid>
            </Grid>
            <Box py={3} display="flex" flexDirection="column" px={2}>
              <MenuNavigationLinks />
            </Box>
            <Divider variant="fullWidth" />
            <Box
              px={2}
              py={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Suspense fallback={null}>
                <CirclesHeaderSection
                  handleOnClick={() => setIsMobileMenuOpen(false)}
                />
              </Suspense>
            </Box>
            {valueProfile?.hasAdminView && (
              <>
                <Divider variant="fullWidth" />
                <Box
                  px={2}
                  py={2}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <CirclesSelectorSection
                    handleOnClick={() => setIsMobileMenuOpen(false)}
                  />
                </Box>
              </>
            )}
          </Box>
        </div>
      )}
    </div>
  );
};

export const HeaderNav = () => {
  const classes = useStyles();
  const { circle, myUser } = useSelectedCircle();

  const navItems = getMainNavigation({
    asCircleAdmin: myUser.isCircleAdmin,
    asVouchingEnabled: circle.hasVouching,
  });

  return (
    <div className={classes.navLinks}>
      {navItems.map(navItem => (
        <NavLink
          className={classes.navLink}
          isActive={(nothing, location) =>
            checkActive(location.pathname, navItem)
          }
          key={navItem.path}
          to={navItem.path}
        >
          {navItem.label}
        </NavLink>
      ))}
    </div>
  );
};

export default MainHeader;
