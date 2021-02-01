import MaterialTable from "material-table";

const columns = [
    {
        title: "Date",
        field: "date",
    },
    {
        title: "Topic",
        field: "topic",
    },
    {
        title: "Type2",
        field: "type2",
    },
    {
        title: "Post",
        field: "title",
    },
    {
        title: "Views",
        field: "views",
    },
    {
        title: "Likes",
        field: "likes",
    },
    {
        title: "Comments",
        field: "comments",
    },
];

const PostTable = ({posts}) => {
    return (
        <MaterialTable
            title="Posts"
            data={posts}
            columns={columns}
            options={{ search: true, paging: false, filtering: true, exportButton: true }}
        />
    );
}

export default PostTable