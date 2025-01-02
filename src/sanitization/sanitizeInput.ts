import DOMPurify from 'dompurify';

export function cleanInput(input: string): string {
  return DOMPurify.sanitize(input);
}
