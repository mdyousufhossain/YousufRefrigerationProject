// api.js

import LRUCache from 'lru-cache';
import supabase from '../../utils/CreateClient';

const cache = new LRUCache({
  max: 100, // Max items in cache
  maxAge: 1000 * 60 * 10, // Cache for 10 minutes
});

export async function fetchProducts() {
  const cachedData = cache.get('products');
  if (cachedData) {
    console.log('Using cached products data');
    return cachedData;
  }

  const { data } = await supabase.from('yrProductDB').select('*');
  cache.set('products', data);
  console.log('Fetched and cached products data');

  return data;
}

// export async function fetchTenProducts() {
//   // Retrieve 10 random items from the 'products' table
//   const { data } = await supabase
//     .from('yrProductDB')
//     .select('*')
//     .order('RANDOM()')
//     .limit(10);

//   if (error) {
//     console.error(error);
//     return null;
//   }

//   return console.log(data);
// }
