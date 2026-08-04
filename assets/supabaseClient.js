// Requer que a lib do Supabase e o config.js já tenham corrido antes deste ficheiro.
// Nota: exposto explicitamente em window para os componentes partilhados
// (account.js, etc.) o encontrarem — `const` no topo não cria window.X.
var supabaseClient = window.supabase.createClient(
  window.SUPABASE_URL,
  window.SUPABASE_PUBLISHABLE_KEY
);
window.supabaseClient = supabaseClient;
