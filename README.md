# Birthday Surprise Website ❤️

A romantic interactive birthday website built with HTML, CSS and vanilla JavaScript.

## 1. Add your photos

Put your photos inside:

assets/photos/

Then edit `script.js` near the top:

```js
photos: [
  { src: "assets/photos/photo1.jpg", caption: "Our beautiful memories ❤️" },
  { src: "assets/photos/photo2.jpg", caption: "Every moment with you is special." }
]
```

## 2. Add music

Put your MP3 file here:

assets/music/birthday-song.mp3

The website will not autoplay it. The visitor can press the music button.

## 3. Personalize the website

Open `script.js` and edit the `CONFIG` object:

- husbandName
- wishTitle
- wishText
- photos
- balloonMessages
- loveLetter
- signature
- finalTitle
- finalText
- forever

## 4. Test locally

You can simply open `index.html` in a browser for most features.

For the best local testing, use VS Code + Live Server.

## 5. Upload to GitHub

Option A — GitHub website:

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, `.nojekyll`, and the `assets` folder.
3. Make sure `index.html` is at the root of the publishing source.

Option B — Git commands:

```bash
git init
git add .
git commit -m "Create birthday surprise website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-surprise.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 6. Enable GitHub Pages

On GitHub:

Repository
→ Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: / (root)
→ Save

After GitHub finishes deploying, open the Pages URL shown there.

For a project repository named `birthday-surprise`, the URL normally looks like:

https://YOUR_USERNAME.github.io/birthday-surprise/

## Important

GitHub Pages websites are accessible on the internet. Do not put passwords, private information, or anything you do not want publicly accessible into the repository or website.
