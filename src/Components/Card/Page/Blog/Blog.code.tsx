// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import Blog from '!!raw-loader!./Blog';
// eslint-disable-next-line import/no-webpack-loader-syntax
import BlogSCSS from '!!raw-loader!./Blog.module.scss';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import Categories from '!!raw-loader!./Categories/Categories';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CategoriesPostPost from '!!raw-loader!./Categories/Post/Post';

const BlogCode = {
    blogJSX: `// Blog.tsx\n\n${Blog}\n\n// Categories.tsx\n\n${Categories}\n\n// Categories/Post/Post.tsx\n\n${CategoriesPostPost}`,
    blogSCSS: `// Blog.module.scss\n\n${BlogSCSS}`
}

export default BlogCode;