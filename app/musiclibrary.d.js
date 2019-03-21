
/**
 * @typedef {object} SearchResult
 * @property {string} title
 * @property {Array<'list'|'grid'>} availableListViews
 * @property {Array<SearchResultItem>} items
 */

/**
 * @typedef {object} SearchResultItem
 * @property {string} service
 * @property {'song'|'folder'} type
 * @property {string} [title]
 * @property {string} [artist]
 * @property {string} [album]
 * @property {string} uri
 * @property {string} albumart
 */


/**
 * @typedef {object} SearchQuery
 * @property {string} value
 */



/**
 * @typedef {object} TrackInfo
 * @property {string} uri
 * @property {string} service
 * @property {string} name	 	- track title
 * @property {string} artist	- track artist
 * @property {string} album	 	- track album
 * @property {'track'} type
 * @property {number} tracknumber
 * @property {string} albumart
 *
 * @property {string} duration
 * @property {string} samplerate
 * @property {string} bitdepth
 * @property {string} trackType - file extension
 */