// The allowed referrer URL
const allowedReferrer = "https://donate.gavs.xyz/"; // Replace with the desired referrer URL

// Check the document referrer
if (document.referrer === allowedReferrer) {
    // Redirect to the target URL
    window.location.href = "https://paypal.me/Gaaaaaav"; // Replace with the desired target URL
} else {
    window.location.href = "https://donate.gavs.xyz/"
}