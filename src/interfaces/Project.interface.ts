export type Category = 'wordpress' | 'vue.js' | 'node.js';
export type Style = 'css vanilla' | 'sass' | 'bootstrap' | 'materialize' | 'tailwindcss';

export interface ProjectInterface {
    id: number;
    title: string;
    image: string;
    url: string;
    description: string;
    category: Category;
    style: Style;
}