export const fetchData = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados", error);
        return [];
    }
}

export const fetchPosts = async (userId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data =  await res.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar posts", error);
        return [];
    }
}

export const fetchComments = async (postId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data =  await res.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar comentários", error);
        return [];
    }
}
