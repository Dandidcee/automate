import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'OtomaID Backend API is running smoothly' });
});

// --- PUBLIC ENDPOINTS ---

// Get all published posts
app.get('/api/public/posts', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        category: true,
        author: { select: { name: true, email: true } }
      },
      orderBy: { publishedAt: 'desc' }
    });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get integrations for marquee
app.get('/api/public/integrations', async (req, res) => {
  try {
    const integrations = await prisma.integration.findMany({
      where: { isActive: true },
      orderBy: { orderIndex: 'asc' }
    });
    res.json(integrations);
  } catch (error) {
    console.error('Error fetching integrations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`OtomaID API Server running on http://localhost:${PORT}`);
});
