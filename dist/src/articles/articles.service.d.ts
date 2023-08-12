import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ArticlesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs> | "This action adds a new article";
    findDrafts(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {})[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {})[]> | "This action returns all articles";
    findOne(id: number): string | import(".prisma/client").Prisma.Prisma__ArticleClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    update(id: number, updateArticleDto: UpdateArticleDto): string | import(".prisma/client").Prisma.Prisma__ArticleClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    remove(id: number): string | import(".prisma/client").Prisma.Prisma__ArticleClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
