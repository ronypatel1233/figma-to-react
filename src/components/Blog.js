import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import rectBg1 from '../images/Rectangletestimonial-bg.png';

const testimonials = [
  {
    name: 'Josh brollins',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
  },
  {
    name: 'Josh brollins',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
  }
];

const TestimonialSection = styled.section`
  width: 100%;
  
  background-size: cover;
  padding: 64px 0 32px 0;
  font-family: 'Mulish', sans-serif;
`;

const TestimonialTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #232323;
  margin-bottom: 32px;
  text-align: left;
  margin-left: 20px;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;
  flex: 1;
  margin-left: 300px;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 32px 40px 32px;
  max-width: 420px;
  min-width: 320px;
  position: relative;
  margin-bottom: 24px;
  flex: 1;
`;

const QuoteTop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const QuoteBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const QuoteText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
`;

const QuoteAuthor = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const QuoteRole = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
`;

const UserName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #232323;
`;

const TestimonialText = styled.div`
  font-size: 16px;
  color: #444;
  margin-top: 8px;
`;


const BlogSection = styled.section`
 width: 1467.08px;
  height: 1277.12px;

  background-size: cover;
  padding: 64px 0 80px 0;
  font-family: 'Mulish', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #232323;
`;

const ViewAll = styled.a`
  color: #2563eb;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
`;

const BlogCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 20px 20px 24px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BlogTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #232323;
`;

const BlogMeta = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
  span.author {
    color: #2563eb;
    font-weight: 500;
    margin-left: 4px;
  }
`;

const BlogDesc = styled.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 0;
  flex: 1;
`;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://3.7.81.243:3253/api/blog/')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setBlogs(data.data);
        }
      });
  }, []);

  return (
    <div
      style={{
        width: "1467.08px",
        height: "1277.12px",
        background: `url(${rectBg1}) no-repeat top left`,
        backgroundSize: "cover",
        position: "relative"
      }}
    >
      <TestimonialSection>
        <TestimonialTitle>Testimonials</TestimonialTitle>
        <TestimonialGrid>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i}>
              <QuoteTop>
                <QuoteText>&ldquo;</QuoteText>
                <QuoteAuthor>{t.name}</QuoteAuthor>
              </QuoteTop>
              <UserRow>
                <Avatar src={t.avatar} alt={t.name} />
                <UserName>{t.name}</UserName>
              </UserRow>
              <TestimonialText>{t.text}</TestimonialText>
              <QuoteBottom>
                <QuoteText>&rdquo;</QuoteText>
              </QuoteBottom>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialSection>
      
      <BlogSection id="blogs">
        <Container>
          <TopRow>
            <Title>Blogs</Title>
            <ViewAll href="#" target="_blank">View All <span>&rarr;</span></ViewAll>
          </TopRow>


          <BlogGrid>
            {blogs.slice(0, 3).map(blog => (
              <BlogCard key={blog.id}>
                <BlogImage src={blog.image_url} alt={blog.name} />
                <BlogContent>
                  <BlogTitle>{blog.name}</BlogTitle>
                  <BlogMeta>
                    {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    {' by '}
                    <span className="author">{blog.writer_name}</span>
                  </BlogMeta>
                  <BlogDesc>{blog.short_description}</BlogDesc>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </Container>
      </BlogSection>
    </div>
  );
};

export default Blog; 