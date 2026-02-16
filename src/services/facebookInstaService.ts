import snapsave from "metadownloader";

async function facebookInsta(url: string) {
  try {
    const result = await snapsave(url); // or snapsave.facebook(url) for FB links
    return result;
  } catch (error: any) {
    throw new Error("Error fetching media: " + error.message);
  }
}

export default facebookInsta;
