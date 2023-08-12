import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
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
    findOne(id: string): string | import(".prisma/client").Prisma.Prisma__ArticleClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    update(id: string, updateArticleDto: UpdateArticleDto): string | import(".prisma/client").Prisma.Prisma__ArticleClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    remove(id: string): string | import(".prisma/client").Prisma.Prisma__ArticleClient<import("@prisma/client/runtime").GetResult<{
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
