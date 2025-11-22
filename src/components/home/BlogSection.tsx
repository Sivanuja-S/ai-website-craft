import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of AI Website Creation",
      excerpt: "Discover how artificial intelligence is revolutionizing web development and what it means for businesses in 2024.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      category: "AI Technology"
    },
    {
      title: "Benefits of Automation in Web Design",
      excerpt: "Learn how automated design processes can save time, reduce costs, and improve consistency across your digital presence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      date: "Jan 12, 2024",
      readTime: "4 min read",
      category: "Automation"
    },
    {
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Essential SEO strategies powered by AI that can help your website rank higher and attract more organic traffic.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      category: "SEO"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 animate-fade-in">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-play">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground font-play">
              Stay updated with the latest trends in AI and web development.
            </p>
          </div>
          <Button 
            variant="outline"
            className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary/5 font-play group"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant hover:border-primary/50 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full font-play">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3 font-play">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 font-play">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 font-play">
                  {post.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-accent p-0 h-auto font-play group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
