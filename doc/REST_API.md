# Endpoints

<details><summary><code>POST <strong>/pdf/url</strong></code> Get PDF from URL</summary>

**URL-encoded Parameters**: None

**Request Body**: 
```javascript
{
    "url": "<url string>", // REQUIRED - The URL to convert to a PDF
    "filename": "something.pdf", // OPTIONAL - The filename for the returned PDF file
    "options": {
        // PDF options - see link below
    },
    "headers": {
        // OPTIONAL: HTTP headers to send with request
    }
}
```
**Success Response**: Responds with a file download

**Notes**: 
* Only the `url` parameter is required. 
* See [PDF Options](./PDF_OPTIONS.md) for configuration details
</details>

---

<details><summary><code>POST <strong>/image/url</strong></code> Get Image from URL</summary>

**URL-encoded Parameters**: None

**Request Body**: 
```javascript
{
    "url": "<url string>", // REQUIRED - The URL to convert to a PDF
    "filename": "something.pdf", // OPTIONAL - The filename for the returned PDF file
    "options": {
        // Image options - see link below
    },
    "headers": {
        // OPTIONAL: HTTP headers to send with request
    }
}
```
**Success Response**: Responds with a file download

**Notes**: 
* Only the `url` parameter is required. 
* See [Image Options](./IMAGE_OPTIONS.md) for configuration details
</details>

---
