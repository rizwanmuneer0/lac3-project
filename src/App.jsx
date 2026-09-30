import React, { useState } from "react";

// Task 1: ProductCard Component
function ProductCard({ title, price, category }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        padding: "22px",
        borderRadius: "16px",
        width: "250px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
      }}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#6366f1",
          fontWeight: "bold",
          marginBottom: "8px"
        }}
      >
        {category}
      </div>

      <h3 style={{ margin: "8px 0", color: "#111827" }}>
        {title}
      </h3>

      <p style={{ fontSize: "22px", fontWeight: "bold", margin: "12px 0" }}>
        ${price}
      </p>

      <button
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          background: "#111827",
          color: "white",
          cursor: "pointer"
        }}
      >
        View Product
      </button>
    </div>
  );
}

// Task 2: LikeButton Component
function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        textAlign: "center",
        marginBottom: "35px"
      }}
    >
      <h2>❤️ Like Button</h2>

      <button
        onClick={handleLike}
        style={{
          padding: "12px 25px",
          border: "none",
          borderRadius: "10px",
          background: "#ef4444",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Like 👍
      </button>

      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Total Likes: {likes}
      </p>
    </div>
  );
}

// Task 3: Student List
function StudentList() {
  const students = [
    { id: 1, name: "Rizwan", score: 75 },
    { id: 2, name: "Abdullah", score: 45 },
    { id: 3, name: "Musab", score: 88 },
    { id: 4, name: "Zaiyan", score: 35 }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🎓 Student Results
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px"
        }}
      >
        {students.map((student) => {
          const passed = student.score >= 50;

          return (
            <div
              key={student.id}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                borderLeft: `5px solid ${passed ? "#22c55e" : "#ef4444"}`
              }}
            >
              <h3 style={{ marginTop: 0 }}>
                {student.name}
              </h3>

              <p>
                <strong>Score:</strong> {student.score}
              </p>

              <span
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  background: passed ? "#dcfce7" : "#fee2e2",
                  color: passed ? "#15803d" : "#b91c1c",
                  fontWeight: "bold"
                }}
              >
                {passed ? "✓ Pass" : "✗ Fail"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#111827"
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
            Advanced Programming
          </h1>

          <p style={{ color: "#6b7280", fontSize: "16px" }}>
            React Tasks — Props, State & List Rendering
          </p>
        </div>

        {/* Task 1 */}
        <section style={{ marginBottom: "40px" }}>
          <h2>🛍️ Task 1: Product Cards</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            <ProductCard
              title="Laptop"
              price="800"
              category="Electronics"
            />

            <ProductCard
              title="Running Shoes"
              price="60"
              category="Fashion"
            />
          </div>
        </section>

        {/* Task 2 */}
        <section style={{ marginBottom: "40px" }}>
          <LikeButton />
        </section>

        {/* Task 3 */}
        <section>
          <StudentList />
        </section>
      </div>
    </div>
  );
}

export default App;