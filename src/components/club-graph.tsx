"use client"

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jazbaat",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Saanz",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Samvaad",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Abhivyakti",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aavartan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "TPC",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "APS",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "ERS",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "AFC",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Shutterbox",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "ECell",
    total: Math.floor(Math.random() * 5000) + 1000,
  }
]

export function ClubGraph() {
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
