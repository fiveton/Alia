export async function useProducts() {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Failed to fetch products:', error.message)
    return []
  }

  return data.map(p => ({
    ...p,
    image: p.image_url,
    shopUrl: p.shop_url,
  }))
}
