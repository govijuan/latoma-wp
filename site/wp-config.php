<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'latomaac_wp' );

/** MySQL database username */
define( 'DB_USER', 'latomaac_wp' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wZW?KXN#P^%e' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'SeC|&bsO.)Fh C#{t%v1oAT7u<x#+_A5!d#sNZl}41U?gy1I,V#+R>^ W#NMB+A<' );
define( 'SECURE_AUTH_KEY',  'r8vN2:=ldxqtV 3KB)y^Ak7=-2V0`yZe+.NiL/6x[7$+<XbZudzF%qH2p|Gj[*JD' );
define( 'LOGGED_IN_KEY',    '/S3{>2]p3.?knh#a$)U]Hcx..:IR3Ii$`GT- pfU5L}ga+Nu-b)NBWG:=#d8]F0u' );
define( 'NONCE_KEY',        '$o1Ph&QoJ+xOED54vMc[c#_&Ojdltr{q4K6CwBTtLud=hu^d?~Wl+T9N%C14<Pfy' );
define( 'AUTH_SALT',        'cmmLA`PIA0Qds3WanDtOyY/g%EkD-xs1oC2$a`&/NgN#K}F;{M6a,-3&|Nxr%sO0' );
define( 'SECURE_AUTH_SALT', ')/*mu[:|dc{k~d=bR=z$wC^,*t I]Ow^h!**XKk0Ec|x4+)w#*$fERW2 1.3N]#3' );
define( 'LOGGED_IN_SALT',   '$3:iNP[ms~1vS:#YsG8*S#%~1M;`t<Tw]_@B*qV:l0va}rTn[,,r>IrT/PXAg7*=' );
define( 'NONCE_SALT',       '<fj3*gJq*^$~!-MowE(<q7j|T[^2wr4U/MC0ROPYFW/}K<B_sX&hs7@?S0RV_+|:' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
