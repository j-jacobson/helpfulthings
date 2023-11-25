# helpfulthings

Things I use to help me use the internet.

These are mostly bookmarks that allow you to instantly get around ads, paywalls, or anti adblockers. I try to update them regularly.

## Usage

I have created an `.html` file to make it easy to add most of the bookmarks to your browser. You can also add them manually.

**Use the precreated `.html` file**
- Download the `helpfulthings.html` file.
- Go to your browser and find "import bookmarks"
- Select the `helpfulthings.html` file.

**Add bookmarks individually from bookmarks_src**
- Go to your browser and create a new bookmark
- Make the title something to do with the site (e.g. yewtube for the `yewtube_button.txt` file)
- For the address, paste the javascript code in the `.txt` file.

**Once you have the bookmarks added**

1. Find something you want to get around (e.g. YouTube anti-adblock)
2. Click the applicable bookmark (e.g. `yewtube`)
3. Enjoy your content, now through the redirected site. (e.g. through __yewtu.be__ instead of __youtube.com__)

## How it works

Most of these buttons just redirect to a mirror site that does not have ads or paywalls. Some redirect to an archived version of the site. The javascript simply takes the current URL and modifies it to replace the domain, while leaving the relative address the same.

## Contributing

If you notice a link no longer works, please create an issue with a linked PR and I will pull it in.

If you want to add a site, please create an issue to discuss.

## License

Feel free to use this code however you wish.