import { createClient } from '@supabase/supabase-js';

// Supabase 配置
// 注意：此处使用 publishable key，可安全在客户端使用
const supabaseUrl = 'https://mouvsqlmgymsaxikvqsh.supabase.co';
const supabaseAnonKey = 'sb_publishable_c5f58knbVz8UgOh6L88MUQ_p9j8c1Q-';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        // 启用自动刷新 token
        autoRefreshToken: true,
        // 持久化 session 到 localStorage
        persistSession: true,
        // 检测 URL 中的 session（用于邮箱验证回调）
        detectSessionInUrl: true
    }
});
