export type Category = 'wordpress' | 'vue.js' | 'node.js' | 'python';
export type Style = 'css vanilla' | 'sass' | 'bootstrap' | 'uikit' | 'tailwindcss';

export interface ProjectInterface {
    id: number;
    title: string;
    image: string;
    url: string;
    description: string;
    category: Category;
    style: Style;
}