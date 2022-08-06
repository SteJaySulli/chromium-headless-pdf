# Endpoints

## PDF Generation

<details><summary><code>POST <strong>/pdf/url</strong></code> Get PDF from URL</summary>

Supply a JSON body with the following structure:
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
Only the `url` parameter is required. 

</details>