import { monash } from './researchData';
import slugify from 'slugify';
const data = monash;

monash.map((item) => {
  const slug = slugify(item.title);
  console.log(`slug`, slug);
});
