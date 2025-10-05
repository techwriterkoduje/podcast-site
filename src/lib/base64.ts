export function utf8ToBase64(str: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);

  const binaryString = String.fromCharCode.apply(null, data);
  return btoa(binaryString);
}

function base64ToUtf8(b64: string) {
  const binaryString = atob(b64);
  // Create a Uint8Array from the binary string.
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const decoder = new TextDecoder();
  const decoded = decoder.decode(bytes);
  return decoded;
}

export function decodeFromBase64IfNeeded(str: string) {
  try {
    return base64ToUtf8(str);
  } catch (e) {
    // Not base64, return original string.
    return str;
  }
}
