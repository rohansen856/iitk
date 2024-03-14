"use client"

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Javascript",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "C++",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Python",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Typescript",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Rust",
    total: Math.floor(Math.random() * 5000) + 1000,
  }
]

export function LangGraph() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
