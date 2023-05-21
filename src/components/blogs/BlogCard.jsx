const BlogCard = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="card lg:card-side bg-pink-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Question: {question}</h2>
        <p>Answer: {answer} </p>
      </div>
    </div>
  );
};

export default BlogCard;
