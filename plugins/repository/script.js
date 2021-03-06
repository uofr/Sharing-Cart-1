/**
 * Repository Script
 *
 * @author VERSION2 Inc.
 * @version $Id$
 * @package repository
 */

/**
 * Upload material to repository
 *
 * @param DOMElement <a>
 */
sharing_cart_handler.prototype.repository_upload = function(a)
{
	window.open(this.getParam("block_root")
		+ "plugins/repository/upload.php?" + [
			"id="     + this.a2id(a),
			"course=" + this.getParam("course_id")
		].join("&"));
	return false;
};
