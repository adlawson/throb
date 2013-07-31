/*
 * This file is part of Throb
 *
 * Copyright (c) 2013 Andrew Lawson <http://adlawson.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see  http://github.com/adlawson/throb/blob/master/LICENSE
 * @link http://github.com/adlawson/throb
 */

/**
 * The most basic usage of throb with an HTTPS server
 */
var throb = require('../src/throb');
var https = require('https');

throb(https.createServer().listen(3000));
